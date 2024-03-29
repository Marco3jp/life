import {structure as siteStructure} from "./structure.js"

class IndexGenerator {
    constructor(basePath) {
        this.basePath = basePath;
        this.indexParent = document.querySelector("#index");
        this.intexItemTemplate = document.querySelector("#index-item-template").content;
        this.currentHeader = 2;
        this.currentPath = this.basePath + "/";
        if (this.createIndex(siteStructure, this.indexParent)) {
            document.querySelector(".not-indexed").classList.remove("not-indexed");
        }
    }

    createIndex(structure, currentElement) {
        const thisPath = this.currentPath;

        if (structure.length === 0) {
            return false;
        }

        for (let i = 0; i < structure.length; i++) {
            let thisElement, unOrderListElement = undefined;
            if (structure[i].header) {
                currentElement = this.indexParent;
                thisElement = document.createElement("h" + this.currentHeader);
                unOrderListElement = document.createElement("ul");
            } else {
                thisElement = document.importNode(this.intexItemTemplate, true).querySelector("li");
            }

            if (!structure[i].isNotPage || !structure[i].header) {
                let anchor = thisElement.appendChild(document.createElement("a"));
                anchor.href = this.currentPath + structure[i].fileName;
                anchor.textContent = structure[i].name;
            } else {
                thisElement.textContent = structure[i].name;
            }

            currentElement.appendChild(thisElement);
            if (typeof unOrderListElement !== "undefined") {
                currentElement.appendChild(unOrderListElement);
            }
            if (typeof structure[i].child !== "undefined") {
                this.currentPath = this.currentPath + structure[i].path + "/";
                this.currentHeader++;
                this.createIndex(structure[i].child, unOrderListElement);
                this.currentHeader--;
            }
            this.currentPath = thisPath;
        }

        return true;
    }
}

const indexGenerator = new IndexGenerator("/life");
