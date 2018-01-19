/* 
    Steps
    *   Need to convert the infix expression to prefix/postfix
    *   Use a stack to evaluvate the converted expression 
*/

var priority = new Map();
priority.set("*", 3);
priority.set("/", 3);
priority.set("+", 2);
priority.set("-", 2);
priority.set("(", 1);
priority.set(")", 1);

var num = /\d/
var operator = /\+|\-|\*|\//
var para = /\(|\)/

function infixToPostfix(str){

    var opStack = [];
    var res = '';
    for(let i of str){

        if(i.match(num)){
            res += i;
        }
        else if(i.match(para)){
            switch(i){
                case '(':
                opStack.push(i);
                break;
                case ')':
                var last = opStack.pop();
                while(last != '('){
                    res += last;
                    last = opStack.pop();
                }
                break;
            }
        }
        else if(i.match(operator)){
            var len = opStack.length;
            while(len > 0 && priority.get(opStack[len - 1]) >= priority.get(i)){
                res += opStack.pop();
                len --;
            }
            opStack.push(i);
        }
    }
    while(opStack.length > 0){
        res += opStack.pop();
    }
    return res
}

function evaluvateExpr(str){
    var stack = [];
    for(let i of str){
        switch(i){
            case (i.match(/\d/) || {}).input:
            stack.push(i);
            break;
            case '+':
            stack.push(Number(stack.pop()) + Number(stack.pop()));
            break;
            case '-':
            stack.push(- Number(stack.pop()) + Number(stack.pop()));
            break;
            case '*':
            stack.push(Number(stack.pop()) * Number(stack.pop()));
            break;
            case '/':
            stack.push((1 / Number(stack.pop())) * Number(stack.pop()));
            break;
        }
    }
    return stack[0];
}

var expr = prompt("Enter the expression to evaluvate");
console.log(expr)
var postfix = infixToPostfix(expr);
var evalExpr = evaluvateExpr(postfix);
console.log(evalExpr);