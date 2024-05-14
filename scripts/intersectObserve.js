// Selecting Target Elements
const target = document.querySelectorAll('.hidden');

// Defining Options for Intersection Observer
const options = {
    root: null, // The element that is used as the viewport for checking visibility of the target. Here, 'null' indicates that the browser viewport is used as the root.
    rootMargin: '0px 5000px', // Defines a margin around the root's bounding box. '0px' for top/bottom margin and '5000px' for left/right margin.
    threshold: 1 // The percentage of the target element that needs to be visible within the root for the callback to be triggered. Here, '1' indicates the entire target element needs to be visible.
};

// Creating Intersection Observer
const observer = new IntersectionObserver(entries => {
    console.log(entries);
    entries.forEach(entry => {
        // If the target element is intersecting with the container
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target); // Stop observing the target element
        } 
    });
}, options);

// Observing Target Elements
target.forEach(entries => {
    observer.observe(entries);
});