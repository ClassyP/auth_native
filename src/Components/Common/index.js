export * from "./Button";
export * from "./Card";
export * from "./CardSection";
export * from "./Header";

// *******New Tricks*****
// Can not use the default keyword within the component files
// Export an object with a key Example
// export { Button: Button }; or since the object and key shares the same name export { Button };
// more notes-----> the value is Button so is the key so I much rather use es6 and and just use { Button }