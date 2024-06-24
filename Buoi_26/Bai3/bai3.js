        var categories = [
            { id: 1, name: "Chuyên mục 1" },
            { id: 2, name: "Chuyên mục 2", children: [
                { id: 4, name: "Chuyên mục 2.1" },
                { id: 5, name: "Chuyên mục 2.2", children: [
                    { id: 10, name: "Chuyên mục 2.2.1" },
                    { id: 11, name: "Chuyên mục 2.2.2" },
                    { id: 12, name: "Chuyên mục 2.2.3" },
                ]},
                { id: 6, name: "Chuyên mục 2.3" },
            ]},
            { id: 3, name: "Chuyên mục 3", children: [
                { id: 7, name: "Chuyên mục 3.1" },
                { id: 8, name: "Chuyên mục 3.2" },
                { id: 9, name: "Chuyên mục 3.3" },
            ]},
        ];
        function createOption(category, prefix = '') {
            return `<option value="${category.id}">${prefix}${category.name}</option>`;
        }

        function generateOption(categories, prefix = '') {
            let options = '';
            for (var i = 0; i < categories.length; i++) {
                var category = categories[i];
                options += createOption(category, prefix);
                if (category.children) {
                    options += generateOption(category.children, prefix + '--|');
                }
            }
            return options;
        }

        var selectElement = document.getElementById('categorySelect');
        var options = generateOption(categories);
        selectElement.innerHTML += options;
