const seeCaseButtons = document.querySelectorAll(".see-case");
const casePopover = document.querySelector("#case-popover");
const casePopoverType = document.querySelector("#case-popover-type");
const casePopoverImage = document.querySelector("#case-popover-image");
const casePopoverTitle = document.querySelector("#case-popover-title");
const casePopoverDescription = document.querySelector("#case-popover-description");
const casePopoverRole = document.querySelector("#case-popover-role");
const casePopoverTestSection = document.querySelector("#case-popover-test-section");
const casePopoverTest = document.querySelector("#case-popover-test");
const casePopoverTools = document.querySelector("#case-popover-tools");
const casePopoverLink = document.querySelector("#case-popover-link");

function openCasePopover(event) {
    event.preventDefault();

    if (!casePopover) {
        return;
    }

    const button = event.currentTarget;
    const projectTitle = button.dataset.title || button.closest("article")?.querySelector("h2")?.textContent;

    casePopoverType.textContent = button.dataset.type || "Case study";

    if (button.dataset.image) {
        casePopoverImage.src = button.dataset.image;
        casePopoverImage.alt = projectTitle || "Project afbeelding";
        casePopoverImage.hidden = false;
    } else {
        casePopoverImage.hidden = true;
    }

    casePopoverTitle.textContent = projectTitle || "Project";
    casePopoverDescription.textContent = button.dataset.description || "";
    casePopoverRole.textContent = button.dataset.role || "";
    const testText = button.dataset.test || "";
    casePopoverTest.textContent = testText;
    casePopoverTestSection.hidden = !testText;
    casePopoverTools.textContent = "";

    const tools = button.dataset.tools?.split(",").map((tool) => tool.trim()).filter(Boolean) || [];

    tools.forEach((tool) => {
        const toolElement = document.createElement("span");
        toolElement.textContent = tool;
        casePopoverTools.appendChild(toolElement);
    });

    if (button.dataset.link) {
        casePopoverLink.href = button.dataset.link;
        casePopoverLink.hidden = false;
    } else {
        casePopoverLink.hidden = true;
    }

    if (!casePopover.matches(":popover-open")) {
        casePopover.showPopover();
    }
}

seeCaseButtons.forEach((button) => {
    button.addEventListener("click", openCasePopover);
});

casePopover?.addEventListener("toggle", () => {
    document.body.classList.toggle("popover-open", casePopover.matches(":popover-open"));
});
