#define APPROVALS_CATCH
#include "ApprovalTests.hpp"
#include "RoseGarden.h"

std::ostream& operator<<(std::ostream& os, const Item& obj)
{
    return os
        << "name: " << obj.name
        << ", sellIn: " << obj.sellIn
        << ", quality: " << obj.quality;
}

TEST_CASE("RoseGardenApprovalTests", "VerifyCombinations")
{
    std::vector<string> names { "Foo" };
    std::vector<int> sellIns { 1 };
    std::vector<int> qualities { 1 };

    auto f = [](string name, int sellIn, int quality) {
        vector<Item> items = {Item(name, sellIn, quality)};
        RoseGarden app(items);
        app.updateQuality();
        return items[0];
    };

    ApprovalTests::CombinationApprovals::verifyAllCombinations(
            f,
            names, sellIns, qualities);
}
