Esprima
Demo
Project
Documentation
Syntax Validator checks for mistakes and errors
‌
/**‌
 * This method will finish the lifecycle.‌
 * It pushes all changed files to github.‌
 * It will also clear the project file for the next iteration.‌
 *‌
 * @param  {Object} job      The currently handled Job Object‌
 * @param  {Boolean} logging Whether the internal activity should be logged‌
 * @return {Promise}         A promise that resolves when this activity finished‌
 */‌
function finish(job, logging) {‌
    if (!global.status.running) return Promise.reject("The operation has been cancelled");‌
    if (!projects.isValid(job, true)) return Promise.reject("Invalid Job!");‌
‌
    global.status.task[job.author + "/" + job.repo + "/" + job.branch] = "Uploading";‌
    return Promise.all([‌
        github.pushChanges(job, logging),‌
        projects.clearWorkspace(job)‌
    ]);‌
}‌
‌
Code is syntactically valid.
Unlike a typical code linter, this syntax validator does not care about coding styles and formatting.

If there is a syntax error, the sign  will be shown in the left-side gutter. Placing the mouse cursor over that sign will reveal the complete error description.

For a command-line usage, check esvalidate from Esprima package (for Node.js). There is also a plugin for Grunt called grunt-jsvalidate. Ant users can take a look at an exemplary Ant task for syntax validation.

Esprima is created and maintained by Ariya Hidayat.

GitHub
