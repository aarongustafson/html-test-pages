const motionQuery = matchMedia('(prefers-reduced-motion)');

function reducedMotionCheck() {
    if (motionQuery.matches) {
        // code to run if "reduced" is true
    } else {
        // code to run if no preference is true
    }
}
reducedMotionCheck();
motionQuery.addListener(reducedMotionCheck);

/**
 * Adds stable, sequential IDs to test case headings that do not already have one.
 */
function addTestCaseHeadingIds() {
    const testCaseHeadings = document.querySelectorAll('section.tc-block > h2:first-child');

    testCaseHeadings.forEach((heading, index) => {
        if (!heading.id) {
            heading.id = `test-case-${index + 1}`;
            heading.tabIndex = '-1';
        }
    });
}

addTestCaseHeadingIds();
