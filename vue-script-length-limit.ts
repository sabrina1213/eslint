import { Rule } from "eslint";
import * as esTree from "estree";
//import { ESLintProgram } from "vue-eslint-parser/ast";
//import { ESLintProgram } from "vue-eslint-parser";

const rule = {
  mate: {
    type: "problem", // 看一下有哪些值
    docs: {
      description: "srcipt代码行数不宜过长，过长需要进行拆分", // eslint前端校验有哪些文字
    },
  },
  create: function (context) {
    const parserServices = context.parserServices;
    const lengthLimt = context.options[0] || 300;
    const isVueFile = /\.vue/.test(context.getFilename());
    return parserServices.defineTemplateBodyVisitor(
      {},
      {
        // Program(node: ESLintProgram) {
        Program(node) {
          if (!isVueFile) {
            return;
          }
          const {
            loc: { start, end },
          } = node;
          if (end.line - start.line + 1 > lengthLimt) {
            context.report({
              message: `script 部分代码不能超过${lengthLimt},请进行拆分，这里还可以考虑贴上帮助文档`,
              node: node.body[0] as esTree.Node,
            });
          }
        },
      }
    );
  },
};
export default rule;
