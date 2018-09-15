const vscode = require('vscode');

function activate(context) {

    console.log('Congratulations, your extension "word-count" is now active!');

    let disposable = vscode.commands.registerCommand('extension.sayHello', () => {
        let editor = vscode.window.activeTextEditor;
        if (!editor) {
            return; 
        }
        let selection = editor.selection;
        let text = editor.document.getText(selection);

        vscode.window.showInformationMessage('Selected characters: ' + text.length);
    });
    
    context.subscriptions.push(disposable);
}

exports.activate = activate;

function deactivate() {

}
exports.deactivate = deactivate;