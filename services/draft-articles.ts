
export default async function fetchPublishedArticles(){
  const response  = await fetch('/api/articles/draft');
  if(!response.ok){
    throw new Error ("Failed to fetch draft articles");
  }
  const data  = await response.json();
  return data;
  
}