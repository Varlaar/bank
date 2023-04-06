const normalizeLoadComments = (data) => data.map((res) => ({ title: res.name, id: res.id }));

export default normalizeLoadComments;
