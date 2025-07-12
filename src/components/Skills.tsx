type Skill = { name: string; description: string };

const skills: Skill[] = [
    {
        "name": "Web Application Development",
        "description": "Expertise in designing, developing, and maintaining web applications using modern technologies and frameworks. Skilled in creating responsive, user-friendly interfaces and integrating backend services to deliver robust and scalable web solutions."
    },
    {
        "name": "Mobile Application Development",
        "description": "Proficient in developing mobile applications for both iOS and Android platforms. Experienced in using tools and frameworks such as Swift and Kotlin to build intuitive, high-performance mobile apps that provide a seamless user experience."
    },
    {
        "name": "OOP Programming",
        "description": "Strong foundation in Object-Oriented Programming principles and practices. Skilled in using OOP languages such as Java, C++, and Python to create modular, reusable, and maintainable code, enhancing software development efficiency and quality."
    }
]

export const Skills = () => (
    <>
        {
            skills.map(({ name, description }) => {
                return (
                    <li className="list-none my-4" key={name}>
                        <p className="font-bold dark:text-white">{name}</p>
                        <p className="text-gray-700 dark:text-gray-300">{description}</p>
                    </li>
                )
            })
        }
    </>
)
