const Header = () => {
	return (
		<header className='bg-blue-100'>
			<section className='flex justify-between px-10 py-5'>
				<h1><a href='/'>Task manager</a></h1>
				<ul className='flex gap-12'>
					<li>
						<a href='/'>Home</a>
					</li>
					<li>
						<a href='/projects'>Projects</a>
					</li>
					<li>
						<a href='/tasks'>Tasks</a>
					</li>
				</ul>
			</section>
		</header>
	)
}

export default Header
