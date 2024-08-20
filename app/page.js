import Link from 'next/link';

export default function HomePage() {
    return (
        <div className="container">
            <h1 className="text-[2rem] font-extrabold">골라보세요</h1>
            <div className="choose flex gap-6">
                <Link href={'/dog'}>강아지</Link>
                <Link href={'/cat'}>고양이</Link>
            </div>
        </div>
    );
}
