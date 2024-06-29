import { useContext, useState } from "react";
import { Context } from "../context/Context";

import Input from "../components/Input";

const Main = () => {
	// Use context to access state and functions from the context
	const { recentPrompt, showResult, loading, resultData, onSent } =
		useContext(Context);



	

	return (
		<div className="w-full min-h-screen bg-[#000] flex flex-col">
			<div className="flex flex-col flex-grow w-full px-4 mx-auto max-w-7xl ">
				

				{/* Main content */}
				<main className="flex flex-col flex-grow">
						
						<div className="flex flex-col items-start w-full mt-4">
							
							<div className="w-full px-2 py-4 mx-auto overflow-y-scroll text-white bg-[#0D0D0D] shadow-2xl rounded-xl no-scrollbar flex-grow relative">
								

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
