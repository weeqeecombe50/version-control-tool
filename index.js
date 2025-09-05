console.log('Willkommen zum Versionskontrollwerkzeug!');

const versionControlTool = {
    branches: {},
    history: [],

    createBranch(name) {
        this.branches[name] = [];
        console.log(`Branch ${name} wurde erstellt.`);
    },

    commit(message) {
        const commit = { message, timestamp: new Date() };
        this.history.push(commit);
        console.log(`Commit erstellt: ${message}`);
    },

    viewHistory() {
        this.history.forEach((commit) => {
            console.log(`${commit.timestamp}: ${commit.message}`);
        });
    }
};

module.exports = versionControlTool;