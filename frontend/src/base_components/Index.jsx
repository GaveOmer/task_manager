const Tasks_list = [
  {id: 1, category: "restapi", name:"task1"},
  {id: 2, category: "restapi", name:"task2"},
  {id: 3, category: "frontend", name:"task1"},

]




const Index = () => {
  return (
    <div className='flex py-20 gap-10 w-screen justify-center items-center'>
      {Tasks_list.map((task) => (
        <ul key={Tasks_list.id}>
          <li>
            <p>{task.category}</p>
            <p>{task.name}</p>
          </li>
        </ul>
        ))}
    </div>
    
  )
}

export default Index