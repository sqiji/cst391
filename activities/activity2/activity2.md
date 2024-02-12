# Activity 2

## Executive Summary
- In this activiy, first the Angular CLI was installed using npm i -g @angular/cli. Afetr that the testapp was created by using the ng new testapp using VS terminal and selectiong the Angular route and CSS option. ng serve -o command was used to run the testapp which the browser aotumatically opned the testapp.


#### Screenshots 

![screen1](/activities/activity2/activity2screenshot/Angular_v.png)
- This screen shows the Angular CLI after installing it. Also, the screen displays Angular version, node version and angular packages with their versions.

![screen2](/activities/activity2/activity2screenshot/2_d.png)
- The screen shows the borowser of running application (testapp), the testapp was started using ng serve -o command. The command wil biuld the app and initialize several chunk files such as polyfills.js, main.js, and satyles.css.

![screen3](/activities/activity2/activity2screenshot/2_d_2.png)
- The screen shows the title after changing its value in app.component.ts.

![screen3](/activities/activity2/activity2screenshot/2_f.png)
- This screen shows the message with my name, after declare and initialize a variable in app.component.ts and calling it message and asigning my first name to it, then in app.component.html the h3 tag with syntax of {{message}} was used to print the message to the browser.

## Research:
a- 
- node_modules: is a diroctory (folder) created by npm that contains all dependencies and packeges that the project depends on. node_modules diroctory is located in root of the project. Usually, the node_modules is not copy to any other system or uploded to gits because when someone use the project can easlly download the node_modules by just using the commend npm install, the other reason is that the installed packages could differ from system to another.
- src: is stand for source. The src contains the code for the project such as classes. Also, it contains the packages if the project use packages to separate the classes. 
- scr/environments: is the directory that created in scr directory by using ng generate environments and contains the base configration file called environments.ts. The base configration could be overidden by the developer.
- angular.json: is a root level file of an Angular workspace that provides worlspace-wide and project-specific configuration It stores information about the project's architecture, dependencies with other setting. It uses to build and development tools provided by Angular CLI, and test configurations. Also, it allows the developer to control the build and runtime setting for Angular application. It manages the different environments and configuration profiles. 
- The package.json is the heart of Node.js system, which it contains metadata of the project. The package.json contains the module of the project such as project's name, version of module, author. Also, package.json contains the  functional properties of the project such as the entry/starting point of the module, dependencies in project, the used scripts being.
-  tsconfig.json is a JSON format file which allows the user to point to the root files. tsconfig.json speifies the root files and compiler options required to compile the project. The tsconfig.json consists the following information: CompilerOption, CompilerOnSave, Files, Include, and Exclude. 



b-
- main.ts: is a script file that execute the code inside from top to button In other words, main.ts is the main entry of program, compiles the application with JIT compiler and bootstrap the application's root AppModule  to run the browswr. here the main.ts is import bootstrapApplication from angular platform which bootstrapApplication is an instance of an angular application renders a standalone component as the application's root component. then it import app.config with app.component which are used in bootstrapApplication method as parameters to catch the errors.
- app.component.css is the script which contains the CSS that are use to style the web page, or it defines the base CSS stylesheet to the root AppComponent. In this testapp the app.component.css is empty.
- app.component.html is an HTML file that declares what will be renders on the page with the styling (CSS) that are used to styling the web page. 
- app.component.ts: this file will import the component class that are defined in angular module such as @angular/core and @angular/router. Also, it includes the references of sectore, templateUrl, styleUrl, imports, and standalone. as well it exporting AppComponent class that cotains things that user want to display them in web page such as title and message in this actitviy.
- app.module.ts: is define the root module called AppModule that tells Angular how to create the application, which it uses to declare the AppComponenet. When the user add more components to the application must be decleared their. Every application has at least one Angular module.


## Resources: 

- https://stackoverflow.com/questions/63294260/what-is-the-purpose-of-the-node-modules-folder
- https://www.reddit.com/r/node/comments/9o5fzk/what_is_node_modules_used_for/
- https://angular.io/guide/build
- https://angular.io/guide/workspace-config
- https://medium.com/knowledge-pills/what-is-angular-json-file-in-the-angular-app-f060d1a4b3c7
- https://www.geeksforgeeks.org/node-js-package-json/
- https://www.typescriptlang.org/docs/handbook/tsconfig-json.html
- https://www.geeksforgeeks.org/what-is-the-purpose-of-using-tsconfig-json-file/

- https://stackoverflow.com/questions/50098245/what-exactly-triggers-main-ts-in-angular
- https://angular.io/guide/file-structure
- https://www.educative.io/answers/what-is-the-appcomponentsts-file-in-an-angular-application
- https://stackoverflow.com/questions/52018602/what-should-i-write-in-angular-index-and-app-component-html
- https://v2.angular.io/docs/ts/latest/guide/appmodule.html
- https://www.tutorialspoint.com/angular4/angular4_module.htm
