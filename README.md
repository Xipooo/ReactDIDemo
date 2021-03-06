# ReactDIDemo

This repository contains the steps and code for using InversifyJS with a React application.  The back end API will be the template ASP.NET Core React/Redux template that comes with .NET Core 3.0.  The demo does not focus on the API and no code changes are necessary to the API so knowledgde of C# or .NET is not necessary.  All of the changes will be within the ClientApp folder of the project since that is where the React/Redux application is stored.  

In order to run the application you must have .NET Core 3.0+ installed on your computer and run the following command from the root of the project folder:

dotnet run

## How to Read This Repo

Each step will be created within it's own branch of this repository and labeled accordingly.  You simply need to use the **Compare** option between branches to see the code that's been added.  Any additional information required for that step will be included in this document within that branch.

Happy coding  :)

## Slides

An accompanying slide deck for the introduction to the topic can be found here:
[https://docs.google.com/presentation/d/1A1w9QAxg97kBTpPV5Gu-YfLT3BaD1duGINL5DuidCGk/edit?usp=sharing](https://docs.google.com/presentation/d/1A1w9QAxg97kBTpPV5Gu-YfLT3BaD1duGINL5DuidCGk/edit?usp=sharing)

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

* **Step 12**: Repeat Step 8.

* **Step 13**: Create a [`CounterProvider`](https://github.com/Xipooo/ReactDIDemo/blob/Step-13/ClientApp/src/providers/CounterProvider.tsx) Wrapper Component to inject the CounterService into the component tree with a React Context.

* **Step 14**: Modify the [`App`](https://github.com/Xipooo/ReactDIDemo/blob/Step-14/ClientApp/src/App.tsx) component to pass an instance of a CounterService to the component tree.

* **Step 15**: Modify the [`Counter`](https://github.com/Xipooo/ReactDIDemo/blob/Step-15/ClientApp/src/components/Counter.tsx) component to receive the CounterService instance from the `CounterContext`. (How testable is this?)

* **Step 16**: Repeat Step 8.

* **Step 17**: Revert [`Counter`](https://github.com/Xipooo/ReactDIDemo/blob/Step-17/ClientApp/src/components/Counter.tsx) back to Step 14. (How testable is this? How readable is this?)

* **Step 18**: Create [`CachedWeatherService`](https://github.com/Xipooo/ReactDIDemo/blob/Step-18/ClientApp/src/services/CachedWeatherService.ts) class to replace fetch in `WeatherForecasts`. (line 48)

* **Step 19**: Register `CachedWeatherService` to IoC container in [`inversify.config`](https://github.com/Xipooo/ReactDIDemo/blob/Step-19/ClientApp/src/inversify.config.ts) within a Singleton scope.

* **Step 20**: Replace _fetch_ call with `CachedWeatherService` in [`WeatherForecasts`](https://github.com/Xipooo/ReactDIDemo/blob/Step-20/ClientApp/src/store/WeatherForecasts.ts).

* **Step 21**: Repeat Step 8 but observe state changes to the _Fetch Data_ section when clicking between previous and next (cached for 10 seconds).

* **Step 22**: Copy render logic from `FetchData` to a new stateless component called [`Forecast`](https://github.com/Xipooo/ReactDIDemo/blob/Step-22/ClientApp/src/components/Forecast.tsx).

* **Step 23**: Modify [`FetchData`](https://github.com/Xipooo/ReactDIDemo/blob/Step-23/ClientApp/src/components/FetchData.tsx) component to use `CachedWeatherService` instead of Redux.

* **Step 24**: Repeat Step 21.

* **Step 25**: Create [`IWeatherService`](https://github.com/Xipooo/ReactDIDemo/blob/Step-25/ClientApp/src/services/IWeatherService.ts) interface for CachedWeatherService.

* **Step 26**: Modify [`CachedWeatherService`](https://github.com/Xipooo/ReactDIDemo/blob/Step-26/ClientApp/src/services/CachedWeatherService.ts) to implement `IWeatherService`.

* **Step 27**: Modify [`inversify.config`](https://github.com/Xipooo/ReactDIDemo/blob/Step-27/ClientApp/src/inversify.config.ts) to bind an identifier to the concrete class.

* **Step 28**: Modify [`FetchData`](https://github.com/Xipooo/ReactDIDemo/blob/Step-28/ClientApp/src/components/FetchData.tsx) to use the `IWeatherService` interface and TYPES.IWeatherService identifier to inject the class.

* **Step 29**: Repeat Step 21 to validate interface works.

* **Step 30**: Create [`LocalhostWeatherService`](https://github.com/Xipooo/ReactDIDemo/blob/Step-30/ClientApp/src/services/LocalhostWeatherService.ts) that implements `IWeatherService` without caching.

* **Step 31**: Modify [`inversify.config`](https://github.com/Xipooo/ReactDIDemo/blob/Step-31/ClientApp/src/inversify.config.ts) to use `LocalhostWeatherService` instead of `CachedWeatherService`.

* **Step 32**: Repeat Step 21 and observe no more response caching.
