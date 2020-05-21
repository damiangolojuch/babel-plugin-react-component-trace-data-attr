import checkValidOptions from './options'

const findOrAddDataProperty = (t, properties, identifier, attribute) => {
  for (const prop of properties) {
    if (prop.key && prop.key.type === 'StringLiteral' && prop.key.value === attribute) {
      return prop.value;
    }
  }

  // It's better to unshift instead of push, because last property may be a RestElement (...restProps).
  properties.unshift(t.objectProperty(
    t.stringLiteral(attribute),
    identifier,
    true,
    false,
  ));
  return identifier;
}

const getParentDataAttrExpression = (t, path, options, functionParent) => {
  // It is safe to handle nodes with only one param, because probably it is props splitting
  if (functionParent.node.params.length !== 1) {
    return;
  }

  if (functionParent.node.params[0].type === 'ObjectPattern') {
    return findOrAddDataProperty(
      t,
      functionParent.node.params[0].properties,
      path.scope.generateUidIdentifier(),
      options.attribute
    );
  } else {
    const elementDataAttr = t.memberExpression(
      functionParent.node.params[0],
      t.stringLiteral(options.attribute),
      true,
    );

    // functionParent.node.params[0] must be defined
    return t.logicalExpression("&&", functionParent.node.params[0], elementDataAttr);
  }
};

const handleOpeningElement = (t, path, options) => {
  const functionParent = path.getFunctionParent();

  let componentName;
  let parentDataAttrExpression;

  if (!functionParent) return;

  if (functionParent.type == "ClassMethod" || functionParent.parent.type == "ClassProperty") {
    // Class components
    componentName = functionParent.findParent((path) => path.isClassExpression() || path.isClassDeclaration()).node.id.name;
    parentDataAttrExpression = t.memberExpression(
      t.memberExpression(t.thisExpression(), t.identifier('props')),
      t.stringLiteral(options.attribute),
      true,
    );

  } else if (functionParent.parent.type === "VariableDeclarator") {
    // Function components without decorators
    componentName = functionParent.parent.id.name;
    parentDataAttrExpression = getParentDataAttrExpression(t, path, options, functionParent);
  } else if (functionParent.parent.type === "CallExpression" && (functionParent.parent.callee.name === 'memo' || (functionParent.parent.callee.property && functionParent.parent.callee.property.name === 'memo'))) {
    // Function components with memo
    componentName = functionParent.parentPath.parent.id.name;
    parentDataAttrExpression = getParentDataAttrExpression(t, path, options, functionParent);
  } else {
    return;
  }

  path.node.attributes.push(t.jSXAttribute(
    t.jSXIdentifier(options.attribute),
    t.jSXExpressionContainer(
      t.binaryExpression(
        "+",
        parentDataAttrExpression
          ? t.logicalExpression("||", parentDataAttrExpression, t.stringLiteral(""))
          : t.stringLiteral(""),
        t.stringLiteral(options.separator + options.format(componentName))
      )
    )
  ));
};

export default function (babel) {
  const { types: t } = babel;

  return {
    visitor: {
      JSXOpeningElement(path, state) {
        const options = checkValidOptions(state);
        handleOpeningElement(t, path, options);
      }
    }
  };
}
