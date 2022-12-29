import { ModuleRegistry } from "@ag-grid-community/core"; // @ag-grid-community/core will always be implicitly available
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
export default defineNuxtPlugin(() => {
  ModuleRegistry.registerModules([
    ClientSideRowModelModule,
  ]);
});
