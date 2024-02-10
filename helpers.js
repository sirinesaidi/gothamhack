// In-memory data store
let disasters = [];
let paragraphs = [];

// Helper function to generate unique IDs
function generateUniqueId() {
  return Math.random().toString(36).substr(2, 9); // Example: Generates a random alphanumeric string
}

// Helper function to add a disaster to the data store
function addDisaster(disaster) {
  disasters.push(disaster);
}

// Helper function to add a paragraph to the data store
function addParagraph(paragraph) {
  paragraphs.push(paragraph);
}

// Helper function to retrieve all disasters from the data store
function getAllDisasters() {
  return disasters;
}

export { generateUniqueId, addDisaster, addParagraph, getAllDisasters };
