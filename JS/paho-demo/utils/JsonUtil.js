/**
 * Created by Administrator on 2019/10/28.
 */

/**
 * 格式化json字符串
 * js:
 *  获取字符串长度：str.length
 *  比较两个字符串是否相等：str1 == str2
 *
 * java:
 *  获取字符串长度：str.length()
 *  比较两个字符串是否相等：str1.equals(str2)
 *
 * 在控制台中调用该方法即可格式化输出json字符串，在html中需要使用pre元素，包裹内容
 * <pre> 标签可以保留您需要的文本格式，比如不会取消换行和空格，并且所示文本是等宽的
 *
 * @param jsonString
 * @returns {string}
 */
function  prettyPrintJsonString(jsonString){

    var str = "";

    for(var i = 0, j = 0, k = 0, ii; i < jsonString.length; i ++) {//k:缩进，j:""个数

        var charString = jsonString.charAt(i) + "";

        if (j % 2 == 0 && charString == "}") {
            k--;
            for (ii = 0; ii < k; ii++){
                charString = "    " + charString;
            }

            charString = "\n" + charString;
        } else if (j % 2 == 0 && charString == "{") {
            charString += "\n";
            k++;

            for (ii = 0; ii < k; ii++) {
                charString += "    ";
            }

        } else if (j % 2 == 0 && charString == ",") {
            charString += "\n";

            for (ii = 0; ii < k; ii++) {
                charString += "    ";
            }

        } else if (charString == "\""){

            j++;
        }

        str += charString;
    }

    return str;

}
