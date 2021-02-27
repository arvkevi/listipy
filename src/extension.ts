import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  console.log('Attempting to "listipy" your selection');

  let disposable = vscode.commands.registerCommand(
    "listipy.stringToList",
    () => {
      const editor = vscode.window.activeTextEditor;
      if (editor) {
        var selection = editor.selection;
        var text = editor.document.getText(selection);
        if (text.includes("\n")) {
			var pythonList = text.split("\n");
        } else if (text.includes("\t")) {
			var pythonList = text.split("\t");
        } else if (text.includes(",")) {
			var pythonList = text.replace(/, /g, ",").split(",");
		}
		else {
          pythonList = text.split(/[ ,]+/);
        }
        editor
          .edit((builder) => {
            builder.replace(selection, JSON.stringify(pythonList).replace(/,/g, ", "));
          })
          .then((success) => {
            console.log("Listipy worked?:", success);
            // Change the selection: start and end position of the new
            // selection is same, so it is not to select replaced text;
            var postion = editor.selection.end;
            editor.selection = new vscode.Selection(postion, postion);
          });
      }
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
