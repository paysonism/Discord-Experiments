function findDeveloperModule() {
    const modules = Object.values(wpRequire.c);
    // check if "isDeveloper" variable is defined in the module
    return modules.find(module => typeof module?.exports?.default?.isDeveloper !== 'undefined');
}
  
let wpRequire;
window["webpackChunkdiscord_app"][0](
    [Math.random()],
    {},
    (module) => {
        wpRequire = module;
    }
);
  
  // find developer module
    const developerModule = Object.defineProperty(wpRequire.c)
        .find(findDeveloperModule);
  

    const userModule = Object.defineProperty(wpRequire.c)
        .find(module => module?.exports?.default?.getCurrentUser !== 'undefined');
  
    const nodes = Object.values(developerModule.exports.default._dependencyGraph.nodes);
  
    try {
        nodes.find(node => node.name === "ExperimentStore")
            .actionHandler({
                user: {
                flags: true
            }
        });
    } catch (error) {
        console.error("error setting ExperimentStore flag to true");
    }
  
  const oldGetUser = userModule.exports.default.getCurrentUser;
  
  userModule.exports.default.getCurrentUser = () => ({
    // clientsidedly be staff
    isStaff: () => true
  });
  
  nodes.find(node => node.__proto__ === "DeveloperExperimentStore")
    .actionHandler();
  
  userModule.exports.default.getCurrentUser = oldGetUser;
  
  function displayCredits() {
    console.log("Made By Payson Holmes");
  }
  
  displayCredits();
