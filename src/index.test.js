const TestRunner = require("jest-runner")

describe("displayChips", () => {
    test("should display chips", () => {
    const chipCount = document.createElement("span")
    expect(chipCount.classList.contains("span"))
    })
}),

describe("generateCard", () => {
    test("should generate card", () => {
        const playingCard = document.createElement("section");
        expect(playingCard.classList.contains("section"))
    })
}),

describe("disableActionbuttons", (toggle) => {
    test("should disable action buttons", () => {
        const actionButtons = document.querySelectorAll("div.actions__round > button");
        actionButtons.forEach(button => button.setAttribute("disabled", toggle))
        expect(actionButtons.classList).toHaveProperty("disabled", toggle)

    })
})

// describe("renderCards", (cardArray, containerElement) => {
//     test("should render cards", () => {
        
//         cardArray.forEach(card => {
//             containerElement.append(this.generateCard(card));
//         })
//         expect(containerElement.contains(this.card))
//     })
// })