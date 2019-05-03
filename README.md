# Check Star

> Check start é um app desenvolvido para que você possa identificar todos os clientes/Seres que estão passando pelo a sua Estação Espacial, Para ultilizar é muito simples, bastar clickar nos botões indicados de acordo com sua função descrita, e pronto, todos os dados estão na sua mão!

## Requirements

Make sure all dependencies have been installed before moving on:

- [Node.js](http://nodejs.org/) >= v8.11.3

Recommended:

- [@mamba/cli](https://www.npmjs.com/package/@mamba/cli)

## development

### Manually

```shell
# Install the mamba cli globally if doesn't already have it
npm i -g @mamba/cli

# Clone Project
git clone https://github.com/JonasJs/Check-Star.git

# Enter the app directory
cd my-mamba-app

# Install its dependencie
npm install

# Start the development server
mamba app start
```

## Building and deploying to the `POS`

1. Generate the *production* app bundle

```shell
# With the @mamba/cli
mamba app build

```

This will generate the `dist/bundle.pos` directory and a `dist/bundle.pos.tar.gz` file, which both contains your Mamba app.

2. Start the local http server

```shell
npm run serve # Starts the local http server
```

3. Open the `Develop` app and insert your local server ip and the app will automatically look for the `dist/bundle.pos.tar.gz` and install it.

### Npm Commands

- `npm run start` - Start the dev server;
- `npm run serve` - Start a local http server;
- `npm run build` - Build the production bundle;
- `npm run build:dev` - Build the development bundle;
- `npm run build:analyze` - Analyze the final bundle;
- `npm run lint` - Lint all style and script files;
- `npm run format` - Format all style and script files;

## Documentation

- [Svelte](https://svelte.technology/guide)
- [Mamba SDK](https://mambasdk-docs.stone.com.br/guide)
