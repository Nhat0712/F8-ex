var categories = [
    { id: 1, name: "Chuyên mục 1", parent: 0 },
    { id: 2, name: "Chuyên mục 2", parent: 0 },
    { id: 3, name: "Chuyên mục 3", parent: 0 },
    { id: 4, name: "Chuyên mục 2.1", parent: 2 },
    { id: 5, name: "Chuyên mục 2.2", parent: 2 },
    { id: 6, name: "Chuyên mục 2.3", parent: 2 },
    { id: 7, name: "Chuyên mục 3.1", parent: 3 },
    { id: 8, name: "Chuyên mục 3.2", parent: 3 },
    { id: 9, name: "Chuyên mục 3.3", parent: 3 },
    { id: 10, name: "Chuyên mục 2.2.1", parent: 5 },
    { id: 11, name: "Chuyên mục 2.2.2", parent: 5 }
  ];
  
  function buildTree(categories) {
    let map = {};
    let roots = [];
  
    categories.forEach(category => {
      map[category.id] = {...category, children: []};
    });
  
    categories.forEach(category => {
      if (category.parent !== 0) {
        map[category.parent].children.push(map[category.id]);
      } else {
        roots.push(map[category.id]);
      }
    });
  
    return roots;
  }
  
  const nestedCategories = buildTree(categories);
  console.log(JSON.stringify(nestedCategories, null, 2));
  