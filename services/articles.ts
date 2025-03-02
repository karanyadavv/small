
export async function fetchArticles(){
  const response  = await fetch('/api/articles');
  if(!response.ok){
    throw new Error ("Failed to fetch articles");
  }
  const data  = await response.json();
  return data;
  
}

export async function userArticles(){
  const response  = await fetch('/api/users');
  if(!response.ok){
    throw new Error ("Failed to fetch your articles");
  }
  const data  = await response.json();
  return data;
  
}