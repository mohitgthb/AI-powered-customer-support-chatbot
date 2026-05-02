//mock bussiness knowledge

const docs = [
    "Our return policy is 7 days.",
    "We deliver within 3-5 business days.",
    "you can track your order using order Id",
];

const getRelevantDocs = (query) => {
    return docs.filter(doc => 
        query.toLowerCase().includes("order") || query.toLowerCase().includes("return")
    );
};

module.exports = { getRelevantDocs };
