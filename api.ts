import axios from "axios";

export const searchInstitutions = async (searchQuery: {
  search: string;
  limit: number;
  page: number;
}) => {
  const { search, limit, page } = searchQuery;
  const res = await axios.get(
    `http://localhost:5000/api/institution/search?page=${page}&limit=${limit}&slug=${search}`
  );
  return res.data;
};
