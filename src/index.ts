import {GenerateFragments} from './GenerateFragments'
import {Arguments, CommandBuilder} from 'yargs'
import yargs = require('yargs');

const command: {
    command: string
    describe?: string
    handler: (argv: any) => any
    builder?: CommandBuilder
} = {
    command: 'generate-fragments',
    describe: 'Generate fragments',

    builder: {
        output: {
            alias: 'o',
            describe: 'Output folder',
            type: 'string'
        },
        save: {
            alias: 's',
            describe: 'Save settings to config file',
            type: 'boolean',
            default: 'false'
        },
        // js: {
        //   describe: 'Generate fields to js',
        //   type: 'boolean',
        //   default: 'false'
        // },
        // graphql: {
        //   describe: 'Generate fragments to graphql',
        //   type: 'boolean',
        //   default: 'true'
        // },
        generator: {
            alias: 'g',
            describe: "Generate to 'js' / 'graphq' / 'relay'",
            type: 'string'
        },
        verbose: {
            describe: 'Show verbose output messages',
            type: 'boolean',
            default: 'false'
        }
    },

    handler: ( argv) => {
        // if (!argv.graphql && !argv.js) {
        //   argv.graphql = argv.js = true
        // }

        const generateFragments = new GenerateFragments(argv)
        generateFragments.handle()
    }
}

yargs.command(command).argv;
