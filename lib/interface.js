module.exports = function getUserArgument() {
    const userArgs = process.argv.slice(2);

    if (userArgs.length > 1) {
      console.warn('Eep - that is more than one argument, dopey.');
    };

    return userArgs[0];
}

// console.log(getUserArguments());
