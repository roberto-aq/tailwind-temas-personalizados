import { useEffect, useState } from 'react';

const colorThemes = {
	light: '#f9fafb',
	dark: '#111827',
	forest: '#228b22',
	ocean: '#00aaff',
	candy: '#f9a8d4',
};

const themes = [
	{
		name: 'Light',
		color: colorThemes.light,
		value: 'light',
	},
	{
		name: 'Dark',
		color: colorThemes.dark,
		value: 'dark',
	},
	{
		name: 'Forest',
		color: colorThemes.forest,
		value: 'forest',
	},
	{
		name: 'Ocean',
		color: colorThemes.ocean,
		value: 'ocean',
	},
	{
		name: 'Candy',
		color: colorThemes.candy,
		value: 'candy',
	},
];

function App() {
	const [themeSelected, setThemeSelected] = useState(themes[0]);

	useEffect(() => {
		document.documentElement.setAttribute(
			'data-theme',
			themeSelected.value
		);
	}, [themeSelected]);

	return (
		<main className='container mx-auto my-10'>
			<h1 className='text-3xl font-bold tracking-tight mb-2'>
				Cambia el tema:
			</h1>
			<p>
				Cambia el tema de la aplicación haciendo clic en los botones
				de abajo.
			</p>

			<div className='flex gap-5 items-center mt-5'>
				{themes.map(theme => (
					<button
						key={theme.value}
						className={`size-10 border rounded-lg grid place-items-center cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out ${
							themeSelected.value === theme.value
								? 'border-foreground'
								: 'border-slate-200'
						}`}
						onClick={() => {
							setThemeSelected(theme);
						}}
					>
						<span
							className={`size-6 rounded-full border border-slate-300/40 flex items-center justify-center`}
							style={{
								backgroundColor: theme.color,
							}}
						></span>
					</button>
				))}
			</div>

			{/* Mostrar el tema seleccionado */}
			<div className='mt-5'>
				<h2 className='text-xl font-bold'>
					Tema seleccionado: <span>{themeSelected.name}</span>
				</h2>
			</div>

			{/* Vista previa del tema aplicado */}
			<section className='mt-8 space-y-4'>
				<div className='p-6 space-y-3 rounded-lg border-2 border-primary'>
					<h3 className='text-xl font-bold'>Título de ejemplo</h3>
					<p className='text-sm'>
						Este es un ejemplo de texto que muestra cómo se ve el tema
						seleccionado. Puedes cambiar el tema haciendo clic en los
						botones de arriba.
					</p>

					<div className='flex gap-2'>
						<button className='bg-primary text-foreground hover:opacity-90 transition-all cursor-pointer px-4 py-2 rounded-md'>
							Botón Primario
						</button>
						<button className='border-2 border-secondary text-foreground hover:bg-secondary hover:text-background transition-all cursor-pointer px-4 py-2 rounded-md'>
							Botón Secundario
						</button>
					</div>
				</div>
			</section>
		</main>
	);
}

export default App;
