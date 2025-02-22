import prismadb from "@/lib/prismadb";

interface DashboardPageProps {
    params: Promise<{ storeId: string }>
}

const DashboardPage: React.FC<DashboardPageProps> = async ({
    params
}) => {
    const resolvedParams = await params;
    const store = await prismadb.store.findFirst({
        where: {
            id: resolvedParams.storeId
        }
    });

    return (
        <div>
            Active Store: {store?.name}
        </div>
    );
}

export default DashboardPage;