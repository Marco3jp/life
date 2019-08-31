class TocGenerator {
    constructor() {
        this.tocItemTemplate = document.querySelector("#content-toc-item-template").content;
        this.tocParent = document.querySelector("#content-toc-list");
        // TODO: これ以上深いネストに対応
        this.headerList = document.querySelectorAll("#content h3, #content h4");
        const headerListLength = this.headerList.length;
        let lastElement;
        for (let i = 0; i < headerListLength; i++) {
            if (i === 0 || this.headerList[i].tagName === "H3") {
                lastElement = this.createTocItemElement(this.headerList[i]);
                this.tocParent.appendChild(lastElement);
            } else if (this.headerList[i].tagName === "H4" && this.headerList[i - 1].tagName === "H3") {
                let childElement = this.createTocItemElement(this.headerList[i]);
                let olElement = document.createElement("ol");
                olElement.appendChild(childElement);
                lastElement.appendChild(olElement);
                lastElement = olElement;
            } else if (this.headerList[i].tagName === "H4" && this.headerList[i - 1].tagName === "H4") {
                lastElement = this.createTocItemElement(this.headerList[i]);
                lastElement.appendChild(lastElement);
            }
        }
    }

    /**
     * @param headerElement {HTMLHeadingElement}
     * @return {HTMLLIElement}
     */
    createTocItemElement(headerElement) {
        let listElm = document.importNode(this.tocItemTemplate, true);
        let listAnchor = listElm.querySelector("a");
        listAnchor.href = "#" + headerElement.id;
        listAnchor.textContent = headerElement.textContent;
        return listElm;
    }
}

const tocGenerator = new TocGenerator();
