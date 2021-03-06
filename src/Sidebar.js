import { useContext, useEffect, useState } from "react";
import { ChevronDownIcon, PlusIcon, UsersIcon } from "@heroicons/react/outline";
import { LockClosedIcon, EyeIcon } from "@heroicons/react/solid";
import Avatar from "./Avatar";
import Input from "./Input";
import Link from "./Link";
import { clientContext } from "./Context";

function Sidebar() {
	const [repoSearch, setRepoSearch] = useState("");
	const [teamSearch, setTeamSearch] = useState("");
	const client = useContext(clientContext);
	const [repos, setRepos] = useState([]);
	const [teams, setTeams] = useState([]);
	const [username, setUsername] = useState(null);
	useEffect(() => {
		(async () => {
			const me = client.me();
			setUsername((await me.infoAsync())[0].login);
			const [repos] = await me.reposAsync();
			setRepos(
				repos.map(
					({
						id,
						owner: { login: username },
						name,
						html_url: url,
						...meta
					}) => {
						return {
							id,
							username,
							name,
							url,
							visibility: meta.private ? "private" : "public",
						};
					}
				)
			);
			const [teams] = await me.teamsAsync();
			setTeams(
				teams.map(({ id, html_url: url, name, slug }) => {
					return {
						id,
						url,
						name,
						username: url
							.slice("https://github.com/orgs/".length)
							.slice(0, -`/teams/${slug}`.length),
					};
				})
			);
		})();
	}, [client]);
	return (
		<div className="md:bg-gh-sidebar px-6 py-6 flex flex-col space-y-5 border-r border-gray-800 border-opacity-90">
			<div className="flex space-x-2 cursor-pointer border-b border-gray-800 pb-4 pt-2">
				<Avatar src="https://avatars.githubusercontent.com/u/71689619?s=60&v=4" />
				<div className="gh-text opacity-80 font-semibold flex items-center text-sm">
					<span>{username}</span>
					<ChevronDownIcon className="h-3.5 ml-0.5" />
				</div>
			</div>
			<div className="gh-text font-semibold">
				<div className="flex justify-between">
					<span className="opacity-80">Repositories</span>
					<div
						className="bg-green-700 
						text-white 
						opacity-100 
						pr-4 pl-2 py-1 
						rounded-md 
						cursor-pointer 
						text-sm 
						md:flex 
						items-center 
						space-x-1 
						hover:bg-green-600
						hidden"
					>
						<PlusIcon className="h-5" />
						<span>New</span>
					</div>
				</div>
			</div>

			<div className="text-sm">
				<Input
					value={repoSearch}
					onChange={(e) => setRepoSearch(e.target.value)}
					placeholder="Find a repository..."
					className="bg-gh border border-gray-700 border-opacity-50 w-full"
				/>
			</div>
			<div className="flex flex-col text-sm">
				{repos
					.filter(
						(repo) =>
							repo.name
								.toLowerCase()
								.includes(repoSearch.toLowerCase()) ||
							repo.username
								.toLowerCase()
								.includes(repoSearch.toLowerCase())
					)
					.map((repo) => {
						return (
							<div
								className="flex items-center space-x-1 cursor-pointer"
								key={repo.id}
							>
								{repo.visibility === "public" ? (
									<EyeIcon className="h-4 text-gray-300" />
								) : (
									<LockClosedIcon className="h-4 text-yellow-500" />
								)}
								<Link
									href={repo.url}
									text={`${repo.username}/${repo.name}`}
								/>
							</div>
						);
					})}
				{repos.length === 0 && (
					<div className="px-2 text-sm">
						You have no repositories yet...
					</div>
				)}
			</div>

			<div className="gh-text font-semibold">
				<div className="flex justify-between">
					<span className="opacity-80">Teams</span>
				</div>
			</div>
			<div className="text-sm ">
				<Input
					value={teamSearch}
					onChange={(e) => setTeamSearch(e.target.value)}
					placeholder="Find a team..."
					className="bg-gh border border-gray-700 border-opacity-50 w-full"
				/>
			</div>
			<div className="flex flex-col text-sm">
				{teams
					.filter(
						(team) =>
							team.name
								.toLowerCase()
								.includes(teamSearch.toLowerCase()) ||
							team.username
								.toLowerCase()
								.includes(teamSearch.toLowerCase())
					)
					.map((team) => {
						return (
							<div
								className="flex items-center space-x-1 cursor-pointer"
								key={team.name}
							>
								<UsersIcon className="h-4" />
								<Link
									href={team.url}
									text={`${team.username}/${team.name}`}
								/>
							</div>
						);
					})}
				{teams.length === 0 && (
					<div className="text-sm px-2">You have no teams yet...</div>
				)}
			</div>
		</div>
	);
}

export default Sidebar;
