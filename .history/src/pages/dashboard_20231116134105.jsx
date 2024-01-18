import { useSession } from 'next-auth/react';

export default function Profile() {
    const { data: session } = useSession();

    if (!session) {
        return <div>Access Denied</div>;
    }

    return (
        <div>
        <h1>Welcome, {session.user.name}</h1>
        </div>
    );
}
