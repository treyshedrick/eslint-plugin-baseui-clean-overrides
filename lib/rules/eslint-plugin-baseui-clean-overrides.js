module.exports = {
    create(context) {
        return {
            JSXIdentifier(node) {
                if (node.name === "overrides") {
                    context.report({
                        node,
                        message:
                            "Place overrides in const instead of inline"
                    });
                }
            }
        };
    }
};