import { defineEventHandler, getQuery } from "h3";
// import { fetchFromBackend } from "../../lib/loadBalancer";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const config = useRuntimeConfig();

  /**
   *? Verify body data here
   */
  let result = {
    statusCode: -501,
    statusMessage: "notImplemented",
  };
  if (body.domain_name == null) {
    return result;
  }

  // let response = await fetch("/mb/sitesettingget", {
  //   method: "POST",
  //   body: body,
  // });
  // console.log("response: ", response);

  let response = {
    "status" : 1,
    "statusdesc" : "OK",
    "value" : {
      "maintenance" : {
        "is_maintenance" : false,
        "start_date" : null,
        "end_date" : null,
      },
      "site": [
        {
          "site_name" : "",
          "currency" : "MYR",
          "theme_code" : "CryptoCubs",
          "theme_color" : "color1-1",
          "logo1" : "",
          "status" : "PENDING",
          "external_id" : "",
        }
      ],
      "content" : [
        {
          "position" : "",
          "content_id" : "",
          "sequence" : 0,
          "parent_content_id": null,
          "theme_content_group" : "",
          "is_hidden" : false
        }
      ],
      "language": [
        {
          "language" : "EN",
          "is_default" : true
        },
        {
          "language" : "CN",
          "is_default" : false
        },
        
      ]
    }
  }; 

  // /**
  //  *? Transform response into correct format
  //  */

  // // const buildMenuTree = async (menuItems) => {
  // //   try {
  // //     const groupedByTheme = {};
  // //     const map = {};

  // //     // Iterate over menuItems with a standard for loop for better performance
  // //     for (let i = 0; i < menuItems.length; i++) {
  // //       const item = menuItems[i];
  // //       // Initialize theme group if not exists
  // //       if (!groupedByTheme[item.theme_content_group]) {
  // //         groupedByTheme[item.theme_content_group] = [];
  // //       }

  // //       // Get or create the current item in the map
  // //       const currentItem = map[item.content_id] || { ...item, children: [] };
  // //       map[item.content_id] = currentItem;

  // //       // If the item is a root node, add it to the appropriate theme group
  // //       if (item.parent_content_id === null) {
  // //         groupedByTheme[item.theme_content_group].push(currentItem);
  // //       } else {
  // //         // Ensure the parent exists in the map
  // //         const parent = map[item.parent_content_id] || { children: [] };
  // //         parent.children.push(currentItem);
  // //         map[item.parent_content_id] = parent;
  // //       }
  // //     }

  // //     // Return the groupedByTheme object with built tree structure
  // //     return groupedByTheme;
  // //   } catch (error) {
  // //     console.error("An error occurred while building the menu tree:", error);
  // //     // Return an empty object in case of error
  // //     return {};
  // //   }
  // // };

  // // Function to group and sort content by theme_content_group and sequence
  // const groupAndSortContent = (data) => {
  //   // Group by theme_content_group
  //   const grouped = data.reduce((acc, item) => {
  //     const group = item.theme_content_group;
  //     if (!acc[group]) {
  //       acc[group] = [];
  //     }
  //     acc[group].push(item);
  //     return acc;
  //   }, {});

  //   // Sort each group by sequence
  //   for (const group in grouped) {
  //     grouped[group].sort((a, b) => a.sequence - b.sequence);
  //   }

  //   return grouped;
  // };

  // // Function to build a hierarchical structure for the "menu" group
  // const buildMenuHierarchy = (menuData) => {
  //   const menuHierarchy = [];

  //   // First, add all items with parent_content_id = null as top-level entries
  //   const parentMap = {};

  //   menuData.forEach((item) => {
  //     if (item.parent_content_id === null) {
  //       const parentItem = { ...item, children: [] }; // Initialize empty children array
  //       menuHierarchy.push(parentItem);
  //       parentMap[item.content_id] = parentItem;
  //     }
  //   });

  //   // Next, place items with parent_content_id under their corresponding parent
  //   menuData.forEach((item) => {
  //     if (item.parent_content_id !== null) {
  //       const parentItem = parentMap[item.parent_content_id];
  //       if (parentItem) {
  //         parentItem.children.push(item); // Add the child to the parent's children array
  //       }
  //     }
  //   });

  //   return menuHierarchy;
  // };

  if (response.status == 1) {
    let content = {};
    // console.dir(response, { depth: null })
    try {
      // if (response.value && response.value.content) {
      //   // Call the function to group and sort the content
      //   content = groupAndSortContent(response.value.content);

      //   // Build the hierarchical structure for the "menu" group
      //   content["menu"] = buildMenuHierarchy(content["menu"]);
      // }
      result = {
        statusCode: response.status,
        statusMessage: response.statusdesc,
        maintenance: response.value.maintenance,
        site: response.value.site[0],
        content: content,
        language: response.value.language,
        provider_count: response.value.provider_count,
      };
    } catch (error) {
      result = {
        statusCode: response.status,
        statusMessage: response.statusdesc,
        maintenance: {
          is_maintenance: false,
          start_date: null,
          end_date: null,
        },
      };
    }
  } else {
    result = {
      statusCode: response.status,
      statusMessage: response.statusdesc,
      maintenance: {
        is_maintenance: false,
        start_date: null,
        end_date: null,
      },
    };
  }

  /**
   *? Delay function for testing
   **/
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  return result;
});
