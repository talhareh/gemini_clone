import { useContext, useState } from "react";
import { Context } from "../context/Context";
import {  Copy } from "lucide-react";
import Input from "../components/Input";

const Main = () => {
	// Use context to access state and functions from the context
	const { recentPrompt, showResult, loading, resultData, onSent } =
		useContext(Context);

	// State to manage the copy status
	const [copied, setCopied] = useState(false);

	// Function to handle card click
	const handleCardClick = (prompt) => {
		onSent(prompt);
	};

	// Function to handle copying result data
	const handleCopyResult = () => {
		// Create a textarea element to copy text to clipboard
		const textArea = document.createElement("textarea");
		textArea.value = resultData;
		document.body.appendChild(textArea);
		textArea.select(); // Select the text
		document.execCommand("copy");
		document.body.removeChild(textArea);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<div className="w-full min-h-screen bg-[#000] flex flex-col">
			<div className="flex flex-col flex-grow w-full px-4 mx-auto max-w-7xl ">
				

				{/* Main content */}
				<main className="flex flex-col flex-grow">
						
						<div className="flex flex-col items-start w-full mt-4">
							
							<div className="w-full px-2 py-4 mx-auto overflow-y-scroll text-white bg-[#0D0D0D] shadow-2xl rounded-xl no-scrollbar h-80 xl:h-96 relative">
								<div className="flex justify-between items-center">
									<div className="flex items-center px-3 mb-2">
										<div className="flex gap-1">
											<span className="inline-block w-3 h-3 bg-red-500 rounded-full cursor-pointer sm:w-4 sm:h-4"></span>
											<span className="inline-block w-3 h-3 bg-yellow-400 rounded-full cursor-pointer sm:w-4 sm:h-4"></span>
											<span className="inline-block w-3 h-3 bg-green-500 rounded-full cursor-pointer sm:w-4 sm:h-4"></span>
										</div>
									</div>
									<span className="cursor-pointer" onClick={handleCopyResult}>
										<Copy size={20} absoluteStrokeWidth />
									</span>
								</div>

								{/* loading animation */}
								{loading ? (
									// Render loading animation if loading is true
									<div className="flex w-3/4 px-4 space-x-4 animate-pulse">
										<div className="flex-1 py-1 space-y-3">
											<div className="h-3 bg-gray-300 rounded"></div>
											<div className="space-y-3">
												<div className="grid grid-cols-3 gap-4">
													<div className="h-3 col-span-2 bg-gray-300 rounded"></div>
													<div className="h-3 col-span-3 bg-gray-300 rounded"></div>
													<div className="h-3 col-span-4 bg-gray-300 rounded"></div>
												</div>
											</div>
										</div>
									</div>
								) : (
									// Render result data if loading is false
									<p
										className="px-4 text-xs leading-6 sm:leading-8 sm:text-sm"
										dangerouslySetInnerHTML={{ __html: resultData }}
									></p>
								)}
								{copied && (
									// Render copied message if copied is true
									<div className="absolute top-0 right-0 bg-green-500 text-white px-2 py-1 rounded">
										Copied!
									</div>
								)}
							</div>
						</div>
					

					{/* Input component */}
					<div className="my-3">
						<Input />
					</div>
				</main>

				
			</div>
		</div>
	);
};

export default Main;
