interface Props {
    title: string;
    overview: string;
    tools: string;
    github_repository: string;
    start_date: string;
    end_date: string;
}

function Project_Item ( { title, overview, tools, github_repository, start_date, end_date } : Props ) {
    return (
        <div className = 'w-full flex flex-col items-start gap-0.5'>
            <div className = 'w-full flex flex-row justify-between items-center'>
                <div>
                    <h4><span className = 'bold'>{title}</span> | {tools}</h4>
                    <h5>{overview}</h5>
                </div>
            </div>
        </div>
    )
}

export default Project_Item;