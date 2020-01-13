# ReactDIDemo

This repository contains the steps and code for using InversifyJS with a React application.  The back end API will be the template ASP.NET Core React/Redux template that comes with .NET Core 3.0.  The demo does not focus on the API and no code changes are necessary to the API so knowledgde of C# or .NET is not necessary.  All of the changes will be within the ClientApp folder of the project since that is where the React/Redux application is stored.  

In order to run the application you must have .NET Core 3.0+ installed on your computer and run the following command from the root of the project folder:

dotnet run

## How to Read This Repo

Each step will be created within it's own branch of this repository and labeled accordingly.  You simply need to use the **Compare** option between branches to see the code that's been added.  Any additional information required for that step will be included in this document within that branch.

Happy coding  :)

## Steps

* **Step 1**: Create project folder and run the following command from that folder:

```text
dotnet new reactredux
```

* **Step 2**: Run the following command from the ClientApp folder of the project:

```text
npm install inversify inversify-react reflect-metadata --save
```

* **Step 3**: Modify the tsconfig.json file by adding the following settings to the compilerOptions section:

```text
"types": ["reflect-metadata"],
"experimentalDecorators": true,
"emitDecoratorMetadata": true,
"strictPropertyInitialization": false
```

* **Step 4**: Create a [`CounterService`](https://github.com/Xipooo/ReactDIDemo/blob/Step-4/ClientApp/src/services/CounterService.ts) class in a `services` folder.

* **Step 5**: Create an IoC container in a new file called [`inversify.config.js`](https://github.com/Xipooo/ReactDIDemo/blob/Step-5/ClientApp/src/inversify.config.ts) within the `src` folder.

* **Step 6**: Modify [`App.tsx`](https://github.com/Xipooo/ReactDIDemo/blob/Step-6/ClientApp/src/App.tsx) to provide the container to the component tree and import `reflect-metadata`.

* **Step 7**: Modify [`Counter.tsx`](https://github.com/Xipooo/ReactDIDemo/blob/Step-7/ClientApp/src/components/Counter.tsx) to property inject `CounterService` and leverage state for DOM updates.

* **Step 8**: Run application
  * Perform `dotnet run` command to start the application
  * Open browser and devtools pane
  * Enable `Disable cache (while DevTools is open)` under DevTools Settings
  * Navigate to http://localhost:5001
  * Navigate between Counter and Fetch Data components
  * Notice state behavior on the Counter component.  This will become important later.

* **Step 9**: Change `CounterService` registration to use .inSingletonScope() in [`inversify.config.ts`](https://github.com/Xipooo/ReactDIDemo/blob/Step-9/ClientApp/src/inversify.config.ts).

* **Step 10**: Repeat Step 8.

* **Step 11**: Modify the [`Counter`](https://github.com/Xipooo/ReactDIDemo/blob/Step-11/ClientApp/src/components/Counter.tsx) component to be a functional component and use the .get() method on the container to obtain an instance of the `CounterService`.