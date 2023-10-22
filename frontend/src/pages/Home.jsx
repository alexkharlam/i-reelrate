import { useSelector } from "react-redux";
import { LoginBlock } from "../features/Auth";

import { useTranslation } from "react-i18next";
import CtaBanner from "../components/ui/banners/CtaBanner";
import ReviewListViewer from "../features/ReviewListViewer";

function Home() {
    const { t } = useTranslation();
    const { isAuthenticated } = useSelector((state) => state.auth);

    return (
        <div>
            {isAuthenticated && (
                <>
                    <h3 className='text-2xl font-semibold'>
                        {t("cta.createReview")}
                    </h3>
                    <CtaBanner
                        to='/reviews/create'
                        text={t("navigation.createReview")}
                    />
                </>
            )}
            {!isAuthenticated && <LoginBlock />}

            <h3>Popular reviews</h3>
            <ReviewListViewer
                query={{ limit: 3, sortBy: "-rating.numRates" }}
            />
            <h3 className='mb-3 mt-4'>All reviews</h3>
            <ReviewListViewer
                enableCategoryFilter={true}
                enableSorting={true}
            />
        </div>
    );
}

export default Home;
