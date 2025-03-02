
export default async function fetchPublishedArticles(){
  const response  = await fetch('/api/articles/published');
  if(!response.ok){
    throw new Error ("Failed to fetch published articles");
  }
  const data  = await response.json();
  return data;
  
}