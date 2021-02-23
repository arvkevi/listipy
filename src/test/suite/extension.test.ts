import * as assert from 'assert';
import { open } from 'fs';
import * as path from 'path';


// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
import * as listipy from '../../extension';

// Defines a Mocha test suite to group tests of similar kind together
suite("Listipy: Extension Tests", () => {
    test("should be present", function() {
        assert.ok(vscode.extensions.getExtension("arvkevi.listipy"));
    });
	
    test("Testing spaces", function() {
		let wsf = "";
		if(vscode.workspace.workspaceFolders !== undefined) {
			wsf = vscode.workspace.workspaceFolders[0].uri.path;
		} 
		else {
			const message = "Listipy: Working folder not found, open a folder and try again" ;	
			vscode.window.showErrorMessage(message);
		}
		const filePath = vscode.Uri.file(wsf + 'src/test/suite/test_spaces.txt');
		var selection = vscode.workspace.openTextDocument(filePath).then((document) => {
		let text = document.getText();
		return document.lineAt(0); //selection
		// var extension = vscode.extensions.getExtension("arvkevi.listipy");
	});
});
});