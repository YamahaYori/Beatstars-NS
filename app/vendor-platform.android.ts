// Resolve JavaScript classes that extend a Java class, and need to resolve
// their JavaScript module from a bundled script. For example:
// NativeScriptApplication, NativeScriptActivity, etc.
//
// This module gets bundled together with the rest of the app code and the
// `require` calls get resolved to the correct bundling import call.
//
// At runtime the module gets loaded *before* the rest of the app code, so code
// placed here needs to be careful about its dependencies.

require("application");
if (!global["__snapshot"]) {
    // In case snapshot generation is enabled these modules will get into the bundle
    // but will not be required/evaluated.
    // The snapshot webpack plugin will add them to the tns-java-classes.js bundle file.
    // This way, they will be evaluated on app start as early as possible.

    require("ui/frame");
    require("ui/frame/activity");
    require("./main-activity.android.js");
}
