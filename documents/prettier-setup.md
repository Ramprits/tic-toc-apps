## How to setup prettier in vs code.

Go to setting and search save on formate

```
yarn add --dev --exact prettier

```

create .prettierignore file

```
node_modules
.expo
.expo-shared
yarn-lock
```

```
npx prettier --check .
npx prettier --check "**/*.{js,json,ts,tsx}"
"formate:check": "npx prettier --check \"**/*.{js,json,ts,tsx}\""

npx prettier --write .
npx prettier --write "**/*.{js,json,ts,tsx}"
"formate": "npx prettier --write \"**/*.{js,json,ts,tsx}\""
```
