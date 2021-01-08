# Examples of wrapping a CLI for [dotenv-flow](https://www.npmjs.com/package/dotenv-flow)

## A npm script

Disadvantage of requiring `--` for flags.

```bash
# Note the required `--` for command flags
npm run prisma -- -v

# Another usage with env
env NODE_ENV=production npm run prisma migrate status -- --preview-feature

# Note again that flags necessary for prisma CLI need to be after `--`

# This errors with `Please provide the --preview-feature flag to use this command.`
npm run prisma migrate status --preview-feature

# And all of these work
npm run prisma migrate status -- --preview-feature
npm run prisma migrate -- status --preview-feature
npm run prisma -- migrate status --preview-feature
npm run -- prisma migrate status --preview-feature
npm -- run prisma migrate status --preview-feature
```

## Spawn from a Node script

Proxing like this has the big advantage that prompts are working like with the original CLI.

```bash
# The "prisma" scripts first loads dotenv-flow and then spawns the Prisma CLI
NODE_ENV=production node prisma migrate status --preview-feature
```
